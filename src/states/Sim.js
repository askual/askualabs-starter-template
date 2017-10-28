import Phaser from 'phaser'
import WebFont from 'webfontloader'
import { askualabs_snippet } from '../../askualabs_core/js/snippets'
import { askualabs_controller } from '../../askualabs_core/js/controllers'
import { askualabs_periodicTable } from '../../askualabs_core/js/periodicTable'
import { askualabs_brand } from '../../askualabs_core/js/brand'

export default class extends Phaser.State {
  constructor() {
    super();
    this.naming = {
        "H" : "Hydrogen",
        "He" : "Helium",
        "Li" : "Lithium",
        "Be" : "Beryllium",
        "B" : "Boron",
        "C" : "Carbide",
        "N" : "Nitride",
        "O" : "Oxide",
        "F" : "Fluoride",
        "Ne" : "Neon",
        "Na" : "Sodium",
        "Mg" : "Magnesium",
        "Al" : "Aluminum",
        "Si" : "Silicon",
        "P" : "Phosphide",
        "S" : "Sulfide",
        "Cl" : "Chloride",
        "Ar" : "Argon",
        "K" : "Potassium",
        "Ca" : "Calcium",
        "Sc" : "Scandium",
        "Ti" : "Titanium",
        "V" : "Vanadium",
        "Cr" : "Chromium",
        "Mn" : "Manganese",
        "Fe" : "Iron",
        "Co" : "Cobalt",
        "Ni" : "Nickel",
        "Cu" : "Copper",
        "Zn" : "Zinc",
        "Ga" : "Gallium",
        "Ge" : "Germanium",
        "As" : "Arsenide",
        "Se" : "Selenide",
        "Br" : "Bromide",
        "Kr" : "Krypton",
        "Rb" : "Rubidium",
        "Sr" : "Strontium",
        "Y" : "Yttrium",
        "Zr" : "Zirconium",
        "Nb" : "Niobium",
        "Mo" : "Molybdenum",
        "Tc" : "Technetium",
        "Ru" : "Ruthenium",
        "Rh" : "Rhodium",
        "Pd" : "Palladium",
        "Ag" : "Silver",
        "Cd" : "Cadmium",
        "In" : "Indium",
        "Sn" : "Tin",
        "Sb" : "Antimony",
        "Te" : "Telluride",
        "I" : "Iodide",
        "Xe" : "Xenon",
        "Cs" : "Cesium",
        "Ba" : "Barium",
        "La" : "Lanthanum",
        "Ce" : "Cerium",
        "Pr" : "Praseodymium",
        "Nd" : "Neodymium",
        "Pm" : "Promethium",
        "Sm" : "Samarium",
        "Eu" : "Europium",
        "Gd" : "Gadolinium",
        "Tb" : "Terbium",
        "Dy" : "Dysprosium",
        "Ho" : "Holmium",
        "Er" : "Erbium",
        "Tm" : "Thulium",
        "Yb" : "Ytterbium",
        "Lu" : "Lutetium",
        "Hf" : "Hafnium",
        "Ta" : "Tantalum",
        "W" : "Tungsten",
        "Re" : "Rhenium",
        "Os" : "Osmium",
        "Ir" : "Iridium",
        "Pt" : "Platinum",
        "Au" : "Gold",
        "Hg" : "Mercury",
        "Tl" : "Thallium",
        "Pb" : "Lead",
        "Bi" : "Bismuth",
        "Po" : "Polonium",
        "At" : "Astatide",
        "Rn" : "Radon",
        "Fr" : "Francium",
        "Ra" : "Radium",
        "Ac" : "Actinium",
        "Th" : "Thorium",
        "Pa" : "Protactinium",
        "U" : "Uranium",
        "Np" : "Neptunium",
        "Pu" : "Plutonium",
        "Am" : "Americium",
        "Cm" : "Curium",
        "Bk" : "Berkelium",
        "Cf" : "Californium",
        "Es" : "Einsteinium",
        "Fm" : "Fermium",
        "Md" : "Mendelevium",
        "No" : "Nobelium",
        "Lr" : "Lawrencium",
        "Rf" : "Rutherfordium",
        "Db" : "Dubnium",
        "Sg" : "Seaborgium",
        "Bh" : "Bohrium",
        "Hs" : "Hassium",
        "Mt" : "Meitnerium",
        "Ds" : "Darmstadtium",
        "Rg" : "Roentgenium",
        "Cn" : "Copernicium",
        "Nh" : "Nihonium",
        "Fl" : "Flerovium",
        "Mc" : "Moscovium",
        "Lv" : "Livermorium",
        "Ts" : "Tennesside",
        "Og" : "Oganesson",
        };
  }

  gotoSim(){
      game.state.start('Sim');
  }
  gotoChall(){
    game.state.start('Game');
  }
create () {
    askualabs_brand.create();
    this.game.stage.backgroundColor = "#0ff889";
    //setting up the periodic table
    this.period = this.game.add.sprite(0, 130, 'PPP');
    this.period.scale.setTo(0.7, 0.64);

    this.p1 = game.add.sprite(252, 54, 'p1');
    this.p1 = game.add.sprite(552, 54, 'p1');
    this.p2 = game.add.sprite(-252, -54, 'p2');
    this.p3 = game.add.sprite(-552, -54, 'p3');

    this.plus = game.add.sprite(455, 77, 'pluss');
    this.equalto = game.add.sprite(865, 70, 'equalto');
    this.equalto.scale.setTo(0.6, 0.6);
    this.equalto.angle = 90;

    this.element = this.game.add.group();
    //seting the properties of the elements;
    this.element.enableBody = true;
    this.game.physics.enable(this.element, Phaser.Physics.ARCADE);
    this.element.inputEnableChildren = true;
    this.element.onChildInputDown.add(this.onclick, this);
    ///text answer area preparation
    var style = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "bold 40px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    var style3 = { font: "bold 30px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    var styletips = { font: "bold 20px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };var style12 = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    this.text1 = this.game.add.text(929, 64, "", style);
    this.text1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    this.text2 = this.game.add.text(this.text1.width+929, 119, "", style1);
    this.text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    this.text3 = this.game.add.text(929+this.text1.width+this.text2.width, 64, "", style);
    this.text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    this.text4 = this.game.add.text(929+this.text1.width+this.text2.width+this.text3.width, 119, "", style1);
    this.text4.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    this.text5 = this.game.add.text(859, 212, "", style3);
    this.textnonmetal = this.game.add.text(580, 56, "", style12);
    this.textmetal = this.game.add.text(285, 56, "", style12);

    this.tips = this.game.add.text(296, 194, "", styletips);
    this.tiptext = this.game.add.text(296+this.tips.width, 194, "", styletips);
    //text5.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //text.setTextBounds(0, 100, 800, 100);


    //creating the elements and putting them on the right place
    let ele = [[100, 205, 'H'],[1182, 205,  'He'],[1182, 320, 'Ar'],[1182, 263, 'Ne'],[1182, 379, 'Kr'],[1182, 496, 'Rn'],[1182, 552, 'Og'],[1182, 437, 'Xe'],
              [1118, 494, 'At'],[1118, 380, 'Br'],[1118, 320, 'Cl'],[1118, 262, 'F'],[1118, 437, 'I'],[1118, 553, 'Ts'],[1054, 262, 'O'],[1054, 320, 'S'],
              [1054, 379, 'Se'],[991, 262, 'N'],[991, 320, 'P'],[927, 262, 'C'],[99, 261, 'Li'],[99, 318, 'Na'],[99, 381, 'K'],[99, 437, 'Rb'],[99, 494, 'Cs'],
              [99, 553, 'Fr'],[163, 262, 'Be'],[163, 318, 'Mg'],[163, 381, 'Ca'],[163, 437, 'Sr'],[163, 494, 'Ba'],[163, 553, 'Ra'],[862, 321, 'Al'],
              [862, 381, 'Ga'],[862, 437, 'In'],[862, 494, 'Tl'],[862, 553, 'Nh'],[926, 439, 'Sn'],[926, 496, 'Pb'],[926, 554, 'Fl'],[990, 496, 'Bi'],
              [990, 555, 'Mc'],[1052, 555, 'Lv'],[227, 380, 'Sc'],[290, 381, 'Ti'],[353, 379, 'V'],[417, 379, 'Cr'],[480, 379, 'Mn'],[543, 379, 'Fe'],
              [608, 381, 'Co'],[674, 380, 'Ni'],[737, 380, 'Cu'],[801, 381, 'Zn'],[227, 437, 'Y'],[290, 437, 'Zr'],[353, 437, 'Nb'],[417, 437, 'Mo'],
              [480, 437, 'Tc'],[543, 437, 'Ru'],[608, 437, 'Rh'],[674, 437, 'Pd'],[737, 437, 'Ag'],[801, 437, 'Cd'],[290, 495, 'Hf'],[353, 495, 'Ta'],
              [417, 495, 'W'],[480, 495, 'Re'],[543, 495, 'Os'],[608, 495, 'Ir'],[674, 495, 'Pt'],[737, 495, 'Au'],[801, 495, 'Hg'],[290, 553, 'Rf'],
              [353, 553, 'Db'],[417, 553, 'Sg'],[480, 553, 'Bh'],[543, 553, 'Hs'],[608, 553, 'Mt'],[674, 553, 'Ds'],[737, 553, 'Rg'],[801, 553, 'Cn'],
              [863, 259, 'B'],[928, 322, 'Si'],[928, 375, 'Ge'],[992, 378, 'As'],[992, 433, 'Sb'],[1055, 437, 'Te'],[1055, 491, 'Po'],[258, 625, 'La'],
              [323, 625, 'Ce'],[387, 625, 'Pr'],[450, 625, 'Nd'],[513, 625, 'Pm'],[577, 625, 'Sm'],[641, 625, 'Eu'],[705, 625, 'Gd'],[768, 625, 'Tb'],
              [832, 625, 'Dy'],[896, 625, 'Ho'],[960, 625, 'Er'],[1023, 625, 'Tm'],[1089, 625, 'Yb'],[1151, 625, 'Lu'],[258, 684, 'Ac'],[323, 684, 'Th'],
              [387, 684, 'Pa'],[450, 684, 'U'],[513, 684, 'Np'],[577, 684, 'Pu'],[641, 684, 'Am'],[705, 684, 'Cm'],[768, 684, 'Cf'],[832, 684, 'Cf'],
              [896, 684, 'Es'],[960, 684, 'Fm'],[1023, 684, 'Md'],[1089, 684, 'No'],[1151, 684, 'Lr']];
    for(let t =0;t<ele.length;t++){
      let tt = ele[t];
      this.createElement(tt[0], tt[1], tt[2]);
    }
  }
  createElement (w,h,n){
    this.temp = this.element.create(w,h,n);
    this.temp.name = n;
    this.temp.width = 63;
    this.temp.height = 60;
  }
  gcm(one, two){
    var toreturn = {f: two, s:one};
    var a, b, temp;
    ///find the greates comen deviser of the two group number and devide both the subscipt with it
    if(one>two){
      a = one; b =two;
    }else {
      a = two; b=one;
    }
    while(b!==0){
      temp = b;
      b  = a%b;
      a  = temp;
    }
    /// var a is the greatest common devisor
    if(a!==0){
      toreturn.f = two/a;
      toreturn.s = one/a;
    }
    ///the function returns the first subscipt as toreturn.f and the second subscript as toreturn.s;
    return toreturn;
  }


  onclick( sprite ){
    var fp = askualabs_periodicTable.searchBySymbol(sprite.name);
    var picked = askualabs_periodicTable.searchBySymbol(sprite.name);
    var cases = fp.Property;
    if(cases=="metal"){
      if(picked.Group<13&&picked.Group>2){
        this.tiptext.text = "Tips:   Please Pick non transitional metal!!";
      }else{
        if(this.tiptext.text == "Tips:   Please Pick non transitional metal!!")
          this.tiptext.text = "";
      }

      if(!this.isleft){
        this.p2.x = 252;  this.p2.y = 54;
        this.textmetal.text = sprite.name;
        this.left = sprite;
        this.isleft = true;
      }else if(!this.isright){
        this.p2.x = 252;  this.p2.y = 54;
        this.textmetal.text = sprite.name;
        this.left = sprite;
        this.isleft = true;
      }else{
        this.p3.x = -252; this.p3.y = -54;
        this.textmetal.text = sprite.name;
        this.textnonmetal.text = "";
        this.isleft = true;
        this.isright = false;
        this.text1.text="";
        this.text2.text="";
        this.text3.text="";
        this.text4.text="";
        this.text5.text = "";
        this.this.left = sprite;
      }
      if(this.isleft&&this.isright){
        this.output(this.left, this.right);
        this.text2.x = this.text1.width+929;
        this.text3.x = this.text1.width+this.text2.width+929;
        this.text4.x = this.text3.width+this.text2.width+this.text1.width+929;
      }

    } else{
      if(picked.Property!="nonmetal"){
        this.tiptext.text = "Tip:   metalloids do not form ionic compound!!";
      }else {
        if(this.tiptext.text == "Tip:   metalloids do not form ionic compound!!")
          this.tiptext.text = "";}
          if(!this.isright){
            this.isright = true;
            this.p3.x = 552; this.p3.y = 54;
            this.textnonmetal.text = sprite.name;
            this.right = sprite;
            if(this.isleft&&this.isright){
              this.output(this.left, this.right);
              this.text2.x = this.text1.width+929;
              this.text3.x = this.text1.width+this.text2.width+929;
              this.text4.x = this.text3.width+this.text2.width+this.text1.width+929;
            }
          }else if(!this.isleft){
            this.isright = true;
            this.p3.x = 552; this.p3.y = 54;
            this.textnonmetal.text = sprite.name;
            this.right = this.sprite;
          }else if(this.isright&&this.isleft){
            this.isleft = false;
            this.textmetal.text = "";
            this.p2.x = -552; this.p2.y = -54;
            this.textnonmetal.text = sprite.name;
            this.right = this.sprite;
            this.text1.text="";
            this.text2.text="";
            this.text3.text="";
            this.text4.text="";
            this.text5.text = "";
          }
        }
      }

      output(left, right){
      	var fp ,sp;
      	console.log(left.key, right.key);
      	fp = askualabs_periodicTable.searchBySymbol(left.key);
      	sp = askualabs_periodicTable.searchBySymbol(right.key);
      	var subs;
      	var nonmetal ="", metal="";
      	var possible = true;
      	var Group1, Group2;
      	Group1 = (fp.Group>=13)? fp.Group-10 : fp.Group;
      	Group2 = (sp.Group>=13)? sp.Group-10 : sp.Group;
      	if(fp.Group<13&&fp.Group>2||(sp.Group<13&&sp.Group>2)||((fp.Period == 6 ||fp.Period== 7)&& !(fp.Group == "" || (fp.Group<3 &&fp.Group>12)))||((sp.Period == 6 ||sp.Period== 7)&& !(sp.Group == "" || (sp.Group<3 &&sp.Group>12)))) {
      		console.log(fp.Group);
      		return;
      			}
      	if(fp.Group>14&&fp.Group<18){
      		Group1 = (fp.Group-18) * -1;
      	}
      	if(sp.Group>14&&sp.Group<18){
      		Group2 = (sp.Group-18) * -1;
      	}
      	console.log(Group1)
      	if(fp.Property==sp.Property) {possible = false;}
      	else{
      		if(fp.Property == 'metal'&&sp.Property == 'nonmetal'){
      			metal = fp.Symbol;
      			nonmetal = sp.Symbol;
      			subs = this.gcm(Group1, Group2);
      			console.log(metal, nonmetal, '1');
      		}
       		else if(fp.Property == 'nonmetal'&&sp.Property == 'metal'){
      			metal = sp.Symbol;
      			nonmetal = fp.Symbol;
      			subs = this.gcm(Group2, Group1);
      			console.log(metal, nonmetal, '2');
      		}
      		else {possible = false;}
      	}
      	if(sp.Group==18 || fp.Group==18) possible = false;

      	if(possible)
      	{		this.text1.text = metal;
      			this.text3.text = nonmetal;
      			if(subs.f > 1)
      			{this.text2.text = ""+subs.f;}

      			if(subs.s > 1)
      			{this.text4.text = ""+subs.s;}
      			 var first = metal;
      			 var second = nonmetal
      	 		console.log(first, second);
      	 		try{
      				this.text5.text = this.naming[first];
      				this.text5.text += ' ' + this.naming[second];
      			}
      	 		catch(e){
      				this.text5.text = "no name";
      			}
      	}
      	else{
      		if(sp.Group==18 || fp.Group==18)
      			{
      				this.text2.text = "Not possible!!!";
      			}
      		else this.text2.text = "Not Ionic bond!!";
      	}
      }


}
