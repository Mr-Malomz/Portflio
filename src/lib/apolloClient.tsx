import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cluchtnot0dj107te3hx123r3/master',
		}),
	});
});
