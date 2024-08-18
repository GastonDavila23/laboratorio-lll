internal class Program{
    private static void Main(string[] args){
        //PUNTO1
        Console.WriteLine("Punto 1");
        for (int i = 1; i < 101; i++)
        {
            if (i % 2 == 0 && i % 5 == 0)
            {
                Console.WriteLine(i);
            }
        }
        Console.WriteLine("-----------------");

        int contador = 1;

        while (contador < 101)
        {
            if (contador % 2 == 0 && contador % 5 == 0)
            {
                Console.WriteLine(contador);
            }
            contador++;
        }
        Console.WriteLine("-----------------");

        int contador2 = 1;
        do
        {
            if (contador2 % 2 == 0 && contador2 % 5 == 0)
            {
                Console.WriteLine(contador2);
            }
            contador2++;
        } while (contador2 < 101);
    
        //PUNTO2
        Console.WriteLine("Punto 2");
        Random random = new Random();
        int numeroAleatorio = random.Next(0, 101);
        Console.WriteLine(numeroAleatorio);

        Console.WriteLine("Bienvenido, el juego comienza");
        int numeroAdivina = 101;
        Console.WriteLine("Ingrese un numero entre 0 y 100");
        
        while (true)
        {
            numeroAdivina = int.Parse(Console.ReadLine());  // Corregido a ReadLine()

            if (numeroAleatorio == numeroAdivina)
            {
                Console.WriteLine("¡Felicidades! Adivinaste el número.");
                break;
            }
            else if (numeroAdivina > numeroAleatorio)
            {
                Console.WriteLine("El numero a adivinar es menor");
            }
            else if (numeroAdivina < numeroAleatorio)
            {
                Console.WriteLine("El numero a adivinar es mayor");
            }
        }

        //PUNTO3
        Console.WriteLine("Punto 3");
        Console.WriteLine("Ingrese un numero para saber si es par o no");
        int numeroPar = int.Parse(Console.ReadLine());
        bool resultadoPar = esPar(numeroPar);
        Console.WriteLine(resultadoPar);

        //PUNTO4
        Console.WriteLine("Punto 4");
        while(true){
            //Menu
            Console.WriteLine("1. Suma");
            Console.WriteLine("2. Resta");
            Console.WriteLine("3. Multiplicacion");
            Console.WriteLine("4. Division");
            Console.WriteLine("5. Resto division");
            int eleccion = int.Parse(Console.ReadLine());
            //Verificacion de eleccion
            if (!eleccion <= 5  || eleccion > 0){
                Console.WriteLine("La opción ingresada no es válida");
                continue;
            }
            //While para verificar que los numeros ingresados sean doubles
            while(true){
                Console.WriteLine("Ingrese el primer número decimal:");
                if (!double.TryParse(Console.ReadLine(), out double numeroA)){
                    Console.WriteLine("No es un número decimal válido.");
                    continue; 
                }
                Console.WriteLine("Ingrese el segundo número decimal:");
                if (!double.TryParse(Console.ReadLine(), out double numeroB))
                {
                    Console.WriteLine("No es un número decimal válido.");
                    continue;
                }
                Console.WriteLine("Número A: " + numeroA ", " "Número B: " + numeroB);
                break;
            }
            //switch case para eleccion
            switch(eleccion){
                case 1:
                    Console.WriteLine(suma(numeroA, numeroB));
                    break;
                case 2:
                    Console.WriteLine(resta(numeroA, numeroB));
                    break;
                case 3:
                    Console.WriteLine(multiplicacion(numeroA, numeroB));
                    break;
                case 4:
                    if (numeroB == 0){
                        Console.WriteLine("No se puede dividir entre 0");
                        break;
                    }else{
                        Console.WriteLine(division(numeroA, numeroB));
                        break;
                    }
                    break;
                case 5:
                    if (numeroB == 0){
                        Console.WriteLine("No se puede calcular el modulo entre 0");
                        break;
                    }else{
                        Console.WriteLine(modulo(numeroA, numeroB));
                        break;
                    }
            }
            Console.WriteLine("¿Desea realizar otra operación? (s/n)");
            string salida = Console.ReadLine().ToLower();
            if (salida != "s"){
                break;
            }
        }
    }
          
    //Funcion del punto 3
    static bool esPar(int numero){
            return numero % 2 == 0;
        }
    //Funciones del punto 4
    static double suma(double a, double b){
        double resultado = (a + b);
        return resultado;
    }
    static double resta(double a, double b){
        double resultado = (a - b);
        return + resultado;
    }       
    static double multiplicacion(double a, double b){
        double resultado = (a * b);
        return resultado;
    }
    static double division(double a, double b){
        double resultado = (a / b);
        return resultado;
    }
    static double modulo(double a, double b){
        double resultado = (a % b);
        return resultado;
    }
}
