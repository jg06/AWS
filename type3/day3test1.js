	for(i=0; i<3; i++)
		for(j=0; j<9; j++)
			gugudan[i][j] = (i+1) * (j+1) * 3;

	for(i=0; i<3; i++)
	{
		for(j=0; j<9; j++)
			printf("%4d", gugudan[i][j]);
		printf("\n");
	}