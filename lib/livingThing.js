export default class LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {

    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
get name(){
  return this._name;
}
set name(newName) {
  this._name = newName;
}

get uniCellular(){
  return this._uniCellular;
}

set uniCellular(newUniCellular) {
  this._uniCellular = newUniCellular;
}
get multiCellular() {
  return !this._uniCellular;
}

set multiCellular(newmultiCellular) {
  this._uniCellular = !newmultiCellular;
}

get eukaryote() {
  return this._trueNucleus;
}

set eukaryote(newEukaryote) {
  this._trueNucleus = newEukaryote;
}

get prokaryote() {
  return !this._trueNucleus;
}

set prokaryote(newProkaryote) {
  this._trueNucleus = !newProkaryote;
}

get anaerobic() {
  return this._anaerobic;
}

set anaerobic(newAnaerobic) {
  this._anaerobic = newAnaerobic;
}

get aerobic() {
  return !this.anaerobic;
}

set aerobic(newAerobic) {
  this._anaerobic = !newAerobic;
}

get asexual() {
  return this._asexual;
}

set asexual(newAsexual) {
  this._asexual = newAsexual;
}

get sexual() {
  return !this._asexual;
}

set sexual(newSexual) {
  this._asexual = !newSexual;
}

get mobile() {
  return this._mobile;
}

set mobile(newMobile) {
  this._mobile = newMobile;
}

get immobile() {
  return !this._mobile;
}

set immobile(newImmobile) {
  this._mobile = !newImmobile;
}
}