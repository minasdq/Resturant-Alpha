export declare const getStorybookVersion: (line: string) => {
    package: string;
    version: string;
};
export declare const isCorePackage: (pkg: string) => boolean;
export declare const checkVersionConsistency: () => void;
declare type Options = {
    prerelease: boolean;
    skipCheck: boolean;
    useNpm: boolean;
    dryRun: boolean;
};
export declare const upgrade: ({ prerelease, skipCheck, useNpm, dryRun }: Options) => Promise<void>;
export {};
