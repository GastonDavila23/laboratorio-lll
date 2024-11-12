import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class PedidoVenta {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'idcliente' })
  cliente!: Cliente;

  @Column()
  fechaPedido!: Date;

  @Column()
  nroComprobante!: number;

  @Column()
  formaPago!: string;

  @Column()
  observaciones!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPedido!: number;
}
