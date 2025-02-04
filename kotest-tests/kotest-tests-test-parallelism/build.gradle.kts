plugins {
   id("java")
   kotlin("multiplatform")
   id("java-library")
}

kotlin {

   targets {
      jvm()
   }

   sourceSets {

      val commonMain by getting {
         dependencies {
            compileOnly(kotlin("stdlib"))
            implementation(kotlin("reflect"))
         }
      }

      val jvmTest by getting {
         dependencies {
            implementation(project(Projects.JunitRunner))
            implementation(Libs.Coroutines.coreJvm)
         }
      }
   }
}

apply(from = "../../nopublish.gradle")
