using System;

namespace ConsoleApp8
{
    static class Test
    {
        public static int CountVowel(this string a)
        {
            int count = 0;
            foreach (var item in a.ToLower())
            {
                if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u')
                {
                    count++;
                }
            }
            return count;
        }
    }

    delegate void display();
    delegate void calc(int a, int b);
    class Program
    {
        public static void getinfo()
        {
            Console.WriteLine("Hello world");
        }
        public void calc(int a, int b, out int sum,out int multi)
        {
            sum = a + b;
            multi = a - b;
        }
        
        static void Main(string[] args)
        {
            //display display = new display(getinfo);
            //display();
            //display display1 = new display(delegate
            //      {
            //          Console.WriteLine("Welcome");
            //      }
            //    );
            //calc calc = new calc((a, b) => Console.WriteLine( a + b));
            //calc(14, 6);
            //calc += new calc((a, b) => Console.WriteLine( a - b));
            //calc(12,4);

            //var program = new Program();
            //int sum, multi;
            //program.calc(12, 4, out sum, out multi);
            //Console.WriteLine(sum);
            //Console.WriteLine(multi);

            //Func<int, int, int> func = new Func<int, int, int>((a, b) => a + b);
            //Console.WriteLine(func(35, 6));
            //Func<double, double, double> func1 = new Func<double, double, double>((a, b) => a  + b);
            //Console.WriteLine(func1(34.565, 456.6));
            //Func<string, int> func2 = new Func<string, int>((a) =>
            //{
            //    int count = 0;
            //    foreach (var item in a.ToLower())
            //    {
            //      if(item=='a'||item=='e'||item=='i'||item=='o'||item=='u')
            //        {
            //            count++;
            //        }
            //    } return count; });
            //Console.WriteLine(func2("Learning"));


            string message = "Learning c#";
            Console.WriteLine( message.CountVowel());
      
            Console.ReadLine();
        }
    }
}
