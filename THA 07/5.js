//Write a JavaScript program to get the volume of a Cylinder with four decimal places
//using object classes. Volume of a cylinder : V = πr2h where r is the radius and h
//is the height of the cylinder. Try To Attempt : Difficult Level Increased
function Cylinder(cyl_h,cyl_r)
{
    return cyl_h*cyl_r*cyl_r*Math.PI;
}

var cyl=Cylinder(7,2);
console.log(cyl.toFixed(4));