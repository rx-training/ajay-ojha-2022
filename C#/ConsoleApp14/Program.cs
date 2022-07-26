using System;

namespace EFSampleDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var dataHelper = new DataHelper();
            //dataHelper.InsertEmployee();
            dataHelper.UpdateEmployee();
            dataHelper.PrintEmployees();
            Console.ReadLine();
        }
    }
}
