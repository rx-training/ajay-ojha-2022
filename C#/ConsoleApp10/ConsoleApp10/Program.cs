using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp10
{
    delegate void disp(string message);
    class Program
    {
      
       public static void display(string value)
        {
            Console.WriteLine(value);
        }
        
    }
    class test
    {
        public event disp myevent;
        static void Main(string[] args)
        {
            test program = new test();
            program.myevent = new disp(Program.display);
            program.myevent("Varsha");
            //disp disp = new disp(Program.display);
            //program.myevent?.Invoke("varsha");
            Console.ReadLine();

        }
    }
}
