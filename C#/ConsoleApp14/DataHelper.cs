using EFSampleDemo.Models;

using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EFSampleDemo
{

    public class DataHelper
    {
        private DemoDbContext DbContext { get; set; }
        public DataHelper()
        {
            DbContext = new DemoDbContext();
        }
        public void PrintEmployees()
        {
            var employees = DbContext.EmployeeDTO.FromSqlRaw<EmployeeDTO>("exec GetEmployee").ToList();
            foreach (var employee in employees)
            {
                var departmentName = "";
                Console.WriteLine($"{employee.Id} {employee.Fname} {employee.Lname} {employee.DepName}");
            }
        }

        public void InsertEmployee()
        {
            var employee = new Employee();

            employee.Fname = "DemoFName";
            employee.Lname = "DemoLname";

            DbContext.Employees.Add(employee);
            DbContext.SaveChanges();

            Console.WriteLine(employee.Id);
        }

        public void InsertDepartment()
        {
            var department = new Department();
            department.Name = "RX";

            var employee = new Employee();
            employee.Fname = "Emp1";
            employee.Lname = "Name2";
            department.Employees.Add(employee);
            DbContext.Add(department);
            // DbContext.Departments.Add(department);
            DbContext.SaveChanges();

            Console.WriteLine(department.Id);
        }

        public void UpdateEmployee()
        {
            var employee = DbContext.Employees.Where(x => x.Id == 1).FirstOrDefault();

            employee.Fname = "Dom";
            DbContext.Update(employee);
            DbContext.SaveChanges();
        }

    }
}
