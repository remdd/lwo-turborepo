declare namespace App {
  export type PageProps<T extends { [key: string]: string } = undefined> = {
    params: Promise<T>;
    searchParams: Promise<{
      [key: string]: string | string[] | undefined;
    }>;
  };
}
