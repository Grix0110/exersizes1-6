const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.getAlbumNames.mockResolvedValue();

    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});

