import Bilateral from './Bilateral';

export default class Mollusk extends Bilateral{
constructor(name) {
  super(name, 'exoskeleton');
  this._name = name;
}
}