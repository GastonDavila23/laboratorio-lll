import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id !: number;

  @Column()
  cuit !: string;

  @Column()
  razonSocial!: string;
}
