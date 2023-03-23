namespace SistemaGestionClientes
{
    public partial class Menu : Form
    {
        public Menu()
        {
            InitializeComponent();
        }

        private void btnGestionarClientes_Click(object sender, EventArgs e)
        {
            //  Creo una instanacia de GestionClientes y lo almaceno en la variable ventanaGestionClientes
            GestionClientes ventanaGestionClientes = new GestionClientes();
            ventanaGestionClientes.ShowDialog();
        }
    }
}