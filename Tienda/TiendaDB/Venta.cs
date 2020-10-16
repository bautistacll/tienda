using System;
using System.Collections.Generic;

namespace Tienda.TiendaDB
{
    public partial class Venta
    {
        public int Id { get; set; }
        public int IdVenta { get; set; }
        public int IdCliente { get; set; }
        public int? Cantidad { get; set; }
        public decimal? Precio { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; }
    }
}
