export interface IUserSearchByNameResponse {
    ardaId:                number;
    ggId:                  string;
    name:                  string;
    comparableName:        string;
    username:              string;
    professionalHeadline:  string;
    imageUrl:              string;
    completion:            number;
    grammar:               number;
    weight:                number;
    verified:              boolean;
    totalStrength:         number;
    pageRank:              number;
    organizationId:        null;
    organizationNumericId: null;
    publicId:              null;
    status:                null;
    relationDegree:        number;
    contact:               boolean;
}
