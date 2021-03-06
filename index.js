exports.getEuMembers = function()
{
	return ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"];
};
exports.isEuMember = function(code)
{
	return exports.getEuMembers().indexOf(code.toUpperCase()) != -1;
};
