export interface Proveedores {
    _id: {
        $oid: string;
    };
    provId: string;
    nombre: string;
    direccion: string;
    correoElectronico: string;
    telefono: string;
}
