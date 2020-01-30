/**
 * Base class for asset load/save helpers.
 * @abstract
 */
class Helper {
    constructor (parent) {
        this.parent = parent;
    }

    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */
    load (assetType, assetId, dataFormat) {
        return Promise.reject(new Error(`No asset of type ${assetType} for ID ${assetId} with format ${dataFormat}`));
    }

    /**
     * Create or update an asset with provided data. The create function is called if no asset id is provided
     * @param {AssetType} assetType - The type of asset to create or update.
     * @param {?DataFormat} dataFormat - DataFormat of the data for the stored asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {?string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for the response from the create or update request
     */
    store (assetType, dataFormat, data, assetId) {
        return Promise.reject(
            new Error(`Cannot store asset of type ${assetType} for ID ${assetId} with format ${dataFormat}`)
        );
    }
}

module.exports = Helper;
