﻿using System;
using System.Collections.Generic;

namespace Tienda.TiendaDB
{
    public partial class Articulo
    {
        public int Id { get; set; }
        public int IdCategoria { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public decimal? PrecioVenta { get; set; }
        public int? Stock { get; set; }
        public string Descripcion { get; set; }
        public byte[] Imagen { get; set; }
        public short? Estado { get; set; }
    }
}
