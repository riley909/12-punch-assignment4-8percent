import { Account } from '../../accounts/entities/account.entity';
import { Column, ManyToOne, Index, Entity, JoinColumn, PrimaryColumn } from 'typeorm'

@Entity()
@Index(['account', 'date'])
export class Record {

  @Index()
  @Column()
  account: number;

  @PrimaryColumn()
  date: Date;

  @Column({ type: 'unsigned big int' })
  recordAmount: number;

  @Column()
  recordType: string;

  @Column({ type: 'unsigned big int' })
  balance: number;

  @Column('varchar', { length: 7 })
  note: string;
}
