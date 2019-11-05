fun main() {
    val otherClassInstance = OtherClass()
    val maVar = MyClass()
    println(otherClassInstance.myVar)
	//On crée une fonction anonyme ici qui retourne une valeur
	var myVariable:(name: String) -> Unit = { name -> println("Hello $name") }
	myVariable("toto")

    val myUser = User(name = "Roger", age = 21, gender = Gender.MALE)

    println(myUser)
}
fun myFunction() = "Hello world"
class OtherClass(var myVar:String? = null)

fun myFunction(parameter: String): Int {
    return parameter.length
}

class MyClass {
    var myVar:String? = null
    constructor(myVar: String?){
        myVar = myVar
    }
}

enum class Gender {
    MALE,
    FEMALE,
    OTHER
}

data class User(val name: String, val age: Int, val gender: Gender)



