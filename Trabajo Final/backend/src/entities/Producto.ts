import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  codigoProducto!: string;

  @Column()
  denominacion!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioVenta!: number;
}
