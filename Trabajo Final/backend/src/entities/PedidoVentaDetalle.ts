import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PedidoVenta } from './PedidoVenta';
import { Producto } from './Producto';

@Entity()
export class PedidoVentaDetalle {
  @PrimaryGeneratedColumn()
  id !: number;

  @ManyToOne(() => PedidoVenta)
  @JoinColumn({ name: 'idpedidoventa' })
  pedidoVenta !: PedidoVenta;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'idproducto' })
  producto!: Producto;

  @Column()
  cantidad!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal!: number;
}

