using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            // Account account = new Saving();
            Saving account = new Saving(1, 1, "reena", "ahmedbad", "3434343", 34);
            //{ AccountID = 1, Address = "aBC", CustomerID = 1, InterestAmount = 2000, interestRate = 2, Name = "add", PANCard = "324234000" };
            while (true)
            {
                Console.WriteLine("Please enter the amount");
                account.Amount = Convert.ToInt32(Console.ReadLine());
                account.Deposit();
                account.display();
                Console.WriteLine("Do you want to continue press y or n");
                char ch = Convert.ToChar(Console.ReadLine());
                Console.WriteLine(ch);
                if (!ch.Equals('y'))
                {
                    Console.WriteLine("Hello");
                    break;
                }
                else
                {
                    Console.WriteLine("World");
                }
            }

            Console.WriteLine("Hello World!");
        }
    }
}
