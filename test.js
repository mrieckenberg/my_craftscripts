importPackage(Packages.com.sk89q.worldedit.world.block);

var sess = context.remember();
sess.setBlock(player.getBlockOn().toVector().toBlockPoint(), BlockTypes.WHITE_WOOL.getDefaultState());
