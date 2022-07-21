using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp9
{
    class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Salary { get; set; }
        public override string ToString()
        {
            return $"ID is {ID} Name is {Name} Address is {Address} Salary is {Salary}";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> list = new List<Person>()
            {
                new Person() { ID = 1, Name = "Megha", Address = "Ahmedabad",Salary=123343 },
                new Person(){ID=2,Name="Pinkal",Address="Ahmedabad",Salary=20000}};

          var obj=  list.First((p) => p.Address == "Ahmedabad");
          var output=  list.Sum((res) => res.Salary);
            Console.WriteLine(output);
            Console.WriteLine(obj);
            int[] arr = new int[] { 12, 45, 56, 45 };
        //  var res=  arr.Where((a) => a >= 45);

          //var res=  from k in arr
          //  where k >= 45
          //  select k;

            //var res1 = arr.Single((a) => a == 90);
            //Console.WriteLine(res1);
            //foreach (var item in res)
            //{
            //    Console.WriteLine(item);
            //}
            Console.WriteLine("Hello World!");
        }
    }
}
