using System;
using System.IO;

namespace ConsoleApp12
{
    class Program
    {
        static void Main(string[] args)
        {
            using (FileStream fileStream = new FileStream(@"D:\test.txt", FileMode.Open,
                FileAccess.Write))
            {
                Console.WriteLine("Enter your name");
                var name = Console.ReadLine();
                fileStream.Seek(-10, SeekOrigin.End);
                using (StreamWriter sw = new StreamWriter(fileStream))
                {
                    
                    sw.WriteLine($"your name is {name}");
                }

                DirectoryInfo directoryInfo = new DirectoryInfo(@"D:\demo");

                directoryInfo.Create();
                foreach (var item in directoryInfo.GetDirectories())
                {
                    Console.WriteLine(item.FullName);
                    foreach (var item1 in item.GetFiles())
                    {
                        item1.Delete();
                    }
                }

                Console.WriteLine("Hello World!");
            }
        }
    }
}
