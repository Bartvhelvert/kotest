package com.sksamuel.kotest.engine.test.timeout

import io.kotest.common.ExperimentalKotest
import io.kotest.core.spec.style.FunSpec
import io.kotest.engine.TestEngineLauncher
import io.kotest.engine.listener.CollectingTestEngineListener
import io.kotest.matchers.shouldBe
import kotlinx.coroutines.delay
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.ExperimentalTime

@ExperimentalTime
@ExperimentalKotest
class ContainerTimeoutTest : FunSpec() {
   init {
      test("container test should timeout if nested exceeds parent timeout") {
         val collector = CollectingTestEngineListener()
         TestEngineLauncher(collector)
            .withClasses(NestedTimeout::class)
            .launch()
         collector.tests.keys.map { it.name.testName }.toSet() shouldBe setOf("a")
         collector.tests.values.map { it.errorOrNull?.message }.toSet() shouldBe setOf(
            "Test 'a' did not complete within 10ms",
         )
      }
   }
}

@ExperimentalTime
@ExperimentalKotest
private class NestedTimeout : FunSpec() {
   init {
      context("a").config(timeout = 10.milliseconds) {
         test("b") {
            delay(200.milliseconds)
         }
      }
   }
}
