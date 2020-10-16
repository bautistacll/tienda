using System;
using System.Collections.Generic;

namespace Tienda.TiendaDB
{
    public partial class DetalleVenta
    {
        public int Id { get; set; }
        public int IdVenta { get; set; }
        public int IdArticulo { get; set; }
        public int? Cantidad { get; set; }
        public decimal? Precio { get; set; }
    }
}
