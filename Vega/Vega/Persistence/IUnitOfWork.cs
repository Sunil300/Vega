using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vega.Persistence
{
    interface IUnitOfWork
    {
        Task Complete();
    }
}
