import Eukaryota from './Eukaryota';

export default class Fungi extends Eukaryota{
constructor(name, uniCellular, mobile, heterotroph) {
  super(name, uniCellular, true, mobile, heterotroph);
  this._name = name;
}
}