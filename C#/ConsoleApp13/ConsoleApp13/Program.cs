using ConsoleApp13.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;


namespace ConsoleApp13
{
    class Program
    {
        static void Main(string[] args)
        {
            Data data = new Data();
           List<Employee> list= data.getreport();
            foreach (var item in list)
            {
                Console.WriteLine($"{item.BusinessEntityID} {item.Title}");
            }
            using(AdventureWorks2016Context context=new AdventureWorks2016Context())
            {
                context.Employees.Where()
                //foreach (var item in context.Employees)
                //{
                //    Console.WriteLine(item.JobTitle);
                //}  
            }
            Console.WriteLine("Hello World!");
        }
    }
}
