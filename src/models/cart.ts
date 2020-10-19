import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ required: true })
  title: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);