using System;
using System.Threading;

namespace ConsoleApp11
{
    class Program
    {
        public static void display()
        {
            if(Thread.CurrentThread.Name=="First")
            {
                Thread.Sleep(4000);
            }
          
            for (int i = 0; i <=100; i++)
            {
                
                Console.WriteLine($"Thread {i} Name is {Thread.CurrentThread.Name}");
            }
        }
        static void Main(string[] args)
        {
            Thread thread = new Thread(new ThreadStart(display));
            thread.Name = "First";
            thread.Start();

            Thread thread1 = new Thread(new ThreadStart(display));
            thread1.Name = "Second";
            thread1.Priority = ThreadPriority.Highest;
            thread1.Start();
            thread1.Start();
            Console.WriteLine("Hello World!");
        }
    }
}
