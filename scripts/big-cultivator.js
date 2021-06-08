
const industrialCultivator = extendContent(GenericCrafter, "industrial-cultivator", {});
const water = Liquids.water;
industrialCultivator.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, industrialCultivator, {
	draw(){
		Draw.rect(industrialCultivator.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(water) / industrialCultivator.liquidCapacity);
		Draw.rect(Core.atlas.find(industrialCultivator.name + "-liquid"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(industrialCultivator.name + "-top"), this.x, this.y);
		Draw.reset();
	},	
});