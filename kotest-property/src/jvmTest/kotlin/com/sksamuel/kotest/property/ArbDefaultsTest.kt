package com.sksamuel.kotest.property

import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.WordSpec
import io.kotest.inspectors.forAll
import io.kotest.matchers.nulls.shouldNotBeNull
import io.kotest.matchers.throwable.shouldHaveMessage
import io.kotest.matchers.types.shouldBeInstanceOf
import io.kotest.property.Arb
import io.kotest.property.arbitrary.default
import io.kotest.property.checkAll

class ArbDefaultsTest : WordSpec({

   "Gen.default" should {
      "generate the defaults for list" {

         val gen = Arb.default<List<Int>>()
         checkAll(10, gen) { list ->
            list.forAll { i ->
               i.shouldBeInstanceOf<Int>()
            }
         }
      }

      "generate the defaults for set" {

         val gen = Arb.default<Set<String>>()
         checkAll(10, gen) { inst ->
            inst.forAll { i ->
               i.shouldBeInstanceOf<String>()
            }
         }
      }

      "support basic data classes" {
         checkAll<Foo> { it.shouldNotBeNull() }
      }

      "throw on complex data class" {
         shouldThrow<IllegalStateException> {
            checkAll<Bar> { it.shouldNotBeNull() }
         }.shouldHaveMessage("Could not locate generator for parameter com.sksamuel.kotest.property.Bar.t")
      }
   }
})

data class Foo(val s: String, val b: Boolean, val i: Int, val d: Double, val f: Float, val l: Long)

data class Bar(val s: String, val t: Thread)
