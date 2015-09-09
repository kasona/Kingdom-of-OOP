import LivingThing from './LivingThing';

export default class Archaea extends LivingThing{
constructor(name) {
  super(name, true, false, false, true, false);
  this._name = name;
}
}