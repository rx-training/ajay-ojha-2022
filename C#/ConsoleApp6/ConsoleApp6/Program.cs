using System;

namespace ConsoleApp6
{
    class Calc
    {
        public object divide(int a,int b)
        {
            try
            {
                int c = a / b;
                return c;
            }
            catch(DivideByZeroException d)
            {
                return d.Message;
            }
        }
    }
    class AgeException:ApplicationException
    {
        public AgeException(string message):base(message)
        {

        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Enter number");
                int number = Convert.ToInt32(Console.ReadLine());
                if(number<18)
                {
                    throw new AgeException("Age should be greater than 18");
                }

            }
             catch(FormatException f)
            {
                try
                {
                    throw new FormatException("Please enter number");
                }
                catch (FormatException r)
                {
                    Console.WriteLine(r.Message);
                }
            }
            catch (DivideByZeroException div)
            {

            }
            catch (Exception e)
            {
                Console.WriteLine(e.GetType().Name);
                Console.WriteLine(e.Message);
            }

            Calc c = new Calc();
          Console.WriteLine(  c.divide(12, 6));
            Console.WriteLine("Hello World!");
        }
    }
}
