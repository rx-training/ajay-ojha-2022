using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp13.Models
{
    public partial class Vwemailhistory
    {
        public int BusinessEntityId { get; set; }
        public string FirstName { get; set; }
        public int EmailAddressId { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
