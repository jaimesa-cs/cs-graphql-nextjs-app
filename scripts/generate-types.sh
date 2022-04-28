quicktype --src-lang graphql --lang typescript \
          --graphql-schema ../src/graphql/cs/cs.gqlschema \
          ../src/graphql/cs/$1.graphql \
          > ../src/generated/$2.ts