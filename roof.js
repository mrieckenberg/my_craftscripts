importPackage(Packages.com.sk89q.worldedit);
importPackage(Packages.com.sk89q.worldedit.math);
importPackage(Packages.com.sk89q.worldedit.blocks);

var blocks = context.remember();
var session = context.getSession();
var player = context.getPlayer();
var region = session.getRegionSelector(player.getWorld()).getRegion();



context.checkArgs(1, 1, "<type>");
var blocktype = context.getBlock(argv[1]);


var cycles = region.getLength();

if (region.getWidth() > cycles){
    cycles = region.getWidth();
}

cycles = cycles / 2;

for (var c = 0; c < cycles; c++) {
    for (var w = 0; w < region.getWidth() - (c * 2); w++) {
        for (var l = 0; l < region.getLength() - (c * 2); l++) {
            if (w === 0 || w === (region.getWidth() - (c * 2)) - 1 || l === 0 || l === (region.getLength() - (c * 2)) - 1) {
                var vec = BlockVector3.at(
                    region.getMinimumPoint().getX() + (w + c),
                    region.getMaximumPoint().getY() + c,
                    region.getMinimumPoint().getZ() + (l + c));

                blocks.setBlock(vec, blocktype);
            }
        }
    }
}
