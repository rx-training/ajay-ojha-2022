using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
   abstract class Account
    {
        int AccountID, CustomerID;
        string Name, Address, PANCard;

        public int AccountID1 { get => AccountID; }
        public int Balance { get; set; }
        public int Amount { get; set; }

        Account()
        {

        }
     public   Account(int accountid,int customerid,string name,string address,string pancard)
        {
            this.AccountID = accountid;
            this.CustomerID = customerid;
            this.Name = name;
            this.Address = address;
            this.PANCard = pancard;
        }
        public Account(int accountid, int customerid, string name)
        {
            this.AccountID = accountid;
            this.CustomerID = customerid;
            this.Name = name;
            //this.Address = address;
            //this.PANCard = pancard;
        }
        //protected internal int AccountID { get; set; }
        //public int CustomerID { get; set; }
        //public string Name { get; set; }
        //public string Address { get; set; }
        //public string PANCard  { get; set; }
        //public int Balance { get; set; }
        //public int Amount { get; set; }
        public abstract void WithDraw();
        public abstract void witdraw(int customerid);
        public abstract void Deposit();
        public virtual void  display()
        {
            Console.WriteLine($"Account id {AccountID1} customer id {CustomerID} Name {Name} Address {Address} pancar {PANCard} Balance {Balance}");
        }
    }
    class Saving:Account
    {
     public  Saving(int accountid, int customerid, string name, string address, string pancard,int interestrate) : base(accountid, customerid, name, address, pancard)
        {
           
            this.interestRate = interestRate;
        }
        public void displ()
        {
            Console.WriteLine(AccountID1);
        }
        public override void display()
        {
            base.display();
            Console.WriteLine($"Interest Rate {interestRate} Interest Amount {InterestAmount}");

        }
        
        public override void WithDraw()
        {
            
        }

        public override void Deposit()
        {
            Balance += Amount;
           
        }

        public override void witdraw(int customerid)
        {
            Console.WriteLine("with customer id" + customerid);
        }

        public int interestRate { get; set; }
        public int  InterestAmount { get; set; }
    }
    //class Current:Account
    //{
    //    public int GomastaLicence { get; set; }
    //    public string BusinessName { get; set; }

    //    public override void Deposit()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public override void WithDraw()
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
