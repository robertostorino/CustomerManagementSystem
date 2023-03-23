using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SistemaGestionClientes
{
    internal class Cliente
    {
        //private string nombre ;
        //private string apellido;
        //private string telefono;
        //private string tarjetaDeCredito;
        //public string Nombre
        //{
        //    get { return nombre; }
        //    set { nombre = value; }
        //}

        // Al es escribir los geter y seter de esta forma, ya entiende como si fuera arriba (con las intrucciones de return y demás

        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string TarjetaDeCredito { get; set; }

        public string NombreCompleto
        {
            get { return Nombre + " " + Apellido; }
        }

        public override string ToString ()
        {
            return NombreCompleto;
        }
    }
}