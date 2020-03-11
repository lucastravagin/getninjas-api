import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'User'})
export class User {

    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'varchar', length: 100})
    photo: string;

    @Column({type: 'varchar', length: 100})
    email: string;

    @Column({default: false})
    isRoot: boolean;

    @Column({type: 'varchar', length: 100})
    password: string;

    @Column({default: true})
    active: boolean;

    @Column({default: false})
    deleted: boolean;

    @Column()
    createAt: Date

}
