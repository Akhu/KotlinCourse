/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package CMDKotlin

class App {
    val greeting: String
        get() {
            return "Hello world."
        }
}

/**
 * A group of *members*.
 *
 * This class has no useful logic; it's just a documentation example.
 *
 * @param T the type of a member in this group.
 * @property name the name of this group.
 * @constructor Creates an empty group.
 */
fun main(args: Array<String>) {
    println(App().greeting)
}
