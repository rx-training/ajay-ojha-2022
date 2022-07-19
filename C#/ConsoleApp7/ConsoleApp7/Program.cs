using System;
using System.Collections;
using System.Collections.Generic;

namespace ConsoleApp7
{
    class GenericDemo<T>
    {
        public void display(T info)
        {
            if (info.GetType().Name == "Student")
            {
                Student student = info as Student;
                Console.WriteLine(student.Address);
            }
            Console.WriteLine(info);
        }
    }

    class Student
    {
        private int id;
        private string name;
        public string Address { get; set; }
        public Student()
        {

        }
        public Student(int id, string name, string address)
        {
            this.id = id;
            this.name = name;
            this.Address = address;
        }
        public void display()
        {
            Console.WriteLine($"{id} {name} {Address}");
        }
        //public override string ToString()
        //{
        //    return $"{id}  {name} {Address}";
        //}
        public override bool Equals(object obj)
        {
            var newobject = obj as Student;
            // var newobject1 = (Student)obj;
            if (id == newobject.id && name == newobject.name)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public Student clone()
        {
            return this.MemberwiseClone() as Student;
        }

    }
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Enter 1 for stack");
            Console.WriteLine("Enter 2 for Queue");
            int input = Convert.ToInt32(Console.ReadLine());
            switch (input)
            {

                case 1:

                    stack();
                    break;
                case 2:
                    Dictionary<int, Student> dictionary = new Dictionary<int, Student>();
                    dictionary.Add(1, new Student(1, "sdfsdf", "sdfsdf"));
                    dictionary.Add(2, new Student(2, "sdfs", "sdfsd"));
                    foreach (var item in dictionary)
                    {
                        Console.WriteLine(item.Value);
                    }
                   var resul= dictionary[3];
                    Console.WriteLine(resul.Address);
                    break;
                default:
                    break;

            }


        }
        private static Student InsertElement()
        {
            Console.WriteLine("enter ID,name and address");
            int id = Convert.ToInt32(Console.ReadLine());
            string name = Console.ReadLine();
            string address = Console.ReadLine();
            Student s3 = new Student(id, name, address);
            return s3;
        }

        private static void print(Stack<Student> stack)
        {
            foreach (var item in stack)
            {
                item.display();
            }
        }
        private static void stack()
        {
            Stack<Student> stack = new Stack<Student>();
            while (true)
            {

                Console.WriteLine("Enter 1 for adding element");
                Console.WriteLine("Enter 2 for remove element");
                int choice = Convert.ToInt32(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        Student s3 = InsertElement();
                        stack.Push(s3);
                        print(stack);
                        break;
                    case 2:
                        if (stack.Count > 0)
                        {
                            Console.WriteLine(stack.Pop());
                            print(stack);
                        }
                        else
                        {
                            Console.WriteLine("Stack is empty");
                        }

                        break;
                    default:
                        Console.WriteLine("Invalid choice");
                        break;

                }
                Console.WriteLine("Enter choice press y or n");
                char ch = Convert.ToChar(Console.ReadLine());
                if (ch != 'y')
                {
                    break;
                }
            }
        }
    }
}
