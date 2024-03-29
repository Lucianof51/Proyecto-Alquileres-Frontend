export interface Contrato {
    id: number;
    valor: number;
    honorarios: number;
    punitorios: number;
    fecha_ingreso: Date;
    fecha_egreso: Date;
    fecha_rescision: Date;
    tipo_contrato: string;
    vencimiento_pago: Date;
    propiedad: number;
    locador: number;
    inquilino: number;
    garante: number;
}
