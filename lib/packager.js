/**
 * base class for Packager
 */

function Packager(options) {
	this.options = options;
}

Packager.prototype.package = function(options,args,callback) {
	throw new Error('not implemented');
};

exports.Packager = Packager;