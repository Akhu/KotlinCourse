import kotlin.browser.document

fun main() {
    factorial(4)
    println("Test 1")
    println("Test 2")
    
    document.bgColor = "FFAA12"
    document.getElementById("test")?.innerHTML = "COUCOU"
}

fun factorial(n: Int): Long = if (n == 0) 1 else n * factorial(n - 1)
   
inline fun IntRange.forOdd(f: (Int) -> Unit) {
    this.forEach { if (it % 2 == 1) f(it) }
}