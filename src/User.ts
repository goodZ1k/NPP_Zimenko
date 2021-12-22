import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
    } from "typeorm";

import {ApiProperty} from '@nestjs/swagger'

@Entity('user')
@Index('UK_login', ['login'], { unique: true })
export class User {
    @PrimaryGeneratedColumn(
        {
            name: 'id',
            type: 'int',
            unsigned: true
        },
    )
id: number;
@ApiProperty({ required: true, description: 'users login' })
    @Column(
   {
    
name: 'login',
type: 'varchar',
nullable: false,
length: 50,
},
)
login: string;
 @Column('varchar',
{
nullable: false,
length: 50,
name: 'userPassword',
},
)
userPassword: string;
@Column('varchar', {
nullable: false,
length: 50,
name: 'lastName',
})
lastName: string;
@Column('varchar', {
nullable: false,
length: 50,
name: 'firstName',
})
firstName: string;
@Column('smallint',
{
name: 'userRoleId',
unsigned: true,
nullable: false,
})
userRoleId: number;
    
}